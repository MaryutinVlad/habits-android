import Animated, { useAnimatedRef } from 'react-native-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { LinearGradient } from "expo-linear-gradient";
import { useState, useEffect } from "react";

import { useSQLiteContext } from "expo-sqlite";

import type { ActivityValues, User, ActivityType } from '@/types/types';

import Profile from "@/components/Profile";
import Overview from "@/components/Overview";
import Activities from "@/components/Activities";
import AddPopup from "@/components/AddPopup";
import UsersPopup from '@/components/UsersPopup';

import { createUser, getActivities, createActivity, removeActivity } from '@/db/statements';

import { containers } from "@/styles/containers";

import { emptyUser } from '@/constants/addPopup';

import { defineStandardTiering, defineCustomTiering, defineEfficency } from '@/helpers/helpers';

export default function HomeScreen() {

  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const db = useSQLiteContext();

  const [isActivityPopupOpened, toggleActivityPopup] = useState(false);
  const [isUsersPopupOpened, toggleUsersPopup] = useState(true);
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User>(emptyUser);
  const [activities, setActivities] = useState<ActivityType[]>([]);
  const [efficency, setEfficency] = useState(0);

  const addActivity = async (selectedValues: ActivityValues, portraitIndex: number, activityName: string) => {

    const goal = selectedValues.type.value === "countable" ?
      selectedValues.type.suboptions.value : 1;

    const tiering = selectedValues.tiering.value === "standard" ?
      defineStandardTiering(goal) :
      defineCustomTiering(selectedValues.tiering.suboptions);

    const args = {
      userId: selectedUser.id,
      tiering: JSON.stringify(tiering),
      goal,
      activityName,
      portraitIndex,
    };

    const result = await createActivity(db, args);

    if (result?.changes) {
      const updatedActivities = await getActivities(db, selectedUser.id);
      setActivities(updatedActivities);
      closePopup();
    }
  };

  const deleteActivity = async (activityId: number) => {

    const result = await removeActivity(db, activityId);

    if (result?.changes) {
      const updatedActivities = await getActivities(db, selectedUser.id);
      setActivities(updatedActivities);
      closePopup();
    }
  };

  const closePopup = () => {
    toggleActivityPopup(false);
    toggleUsersPopup(false);
  };

  const createNewUser = async (userName: string) => {
    const result = await createUser(db, userName);

    if (result?.changes) {
      const updatedUsers: User[] = await db.getAllAsync(`SELECT * FROM users`);
      setUsers(updatedUsers);
    }
  };

  const selectUser = async (userData: User) => {

    const selectedUserActivities: ActivityType[] | [] = await getActivities(db, userData.id);

    setActivities(selectedUserActivities);
    setEfficency(defineEfficency(selectedUserActivities))
    setSelectedUser(userData);
    toggleUsersPopup(false)
  };

  useEffect(() => {
    async function setup() {

      const result: User[] = await db.getAllAsync(`SELECT * FROM users`);
      setUsers(result);
    };
    setup();
  }, []);

  return (
    <GestureHandlerRootView>
      <LinearGradient
        colors={["#3B0C8E", "#1950A8"]}
        locations={[.25, .75]}
        style={containers.app}
      >
        {
          isUsersPopupOpened ? (
            <UsersPopup
              users={users}
              onCreateNewUser={createNewUser}
              onSelect={(userData) => selectUser(userData)}
            />
          ) : (
            <>
              <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16} showsVerticalScrollIndicator={false}>

                <Profile
                  name={selectedUser.name}
                  day={selectedUser.day}
                  row={selectedUser.row}
                  exp={selectedUser.exp}
                />
                <Overview
                  efficency={efficency}
                  actTotal={selectedUser.actTotal}
                  actMastered={selectedUser.actMastered}
                />
                <Activities
                  data={activities}
                  onOpenPopup={() => toggleActivityPopup(true)}
                  onDelete={(id) => deleteActivity(id)}
                />

              </Animated.ScrollView>
              {
                isActivityPopupOpened && (
                  <AddPopup
                    onAddActivity={(selectedValues, portraitIndex, activityName) => addActivity(selectedValues, portraitIndex, activityName)}
                    onClose={closePopup}
                  />
                )
              }
            </>
          )
        }
      </LinearGradient>
    </GestureHandlerRootView>
  );
}
