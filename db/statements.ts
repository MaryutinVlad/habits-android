import { SQLiteDatabase, SQLiteExecuteAsyncResult } from "expo-sqlite";
import type { ActivityType, CreateActivityArgs } from "@/types/types";

export async function createUser(db: SQLiteDatabase, userName: string) {

  const statement = await db.prepareAsync(
    `INSERT INTO users (name, day, row, exp, actTotal, actMastered) VALUES($name, 0, 0, 0, 0, 0)`
  );

  let result;

  try {
    result = await statement.executeAsync({ $name: userName });

  } finally {
    await statement.finalizeAsync();
    return result;
  }
};

export async function getActivities(db: SQLiteDatabase, userId: number) {

  const statement = await db.prepareAsync(
    `SELECT * FROM activities WHERE user_id = $userId`
  );

  let activities: ActivityType[] = [];

  try {
    const result: SQLiteExecuteAsyncResult<ActivityType> = await statement.executeAsync({ $userId: userId });

    activities = await result.getAllAsync();

  } finally {
    await statement.finalizeAsync();
    return activities;
  }
};

export async function createActivity(db: SQLiteDatabase, args: CreateActivityArgs) {

  const { userId, activityName, goal, tiering, portraitIndex} = args;

  const statement = await db.prepareAsync(
    `INSERT INTO activities (title, day, row, total, cur, goal, tiering, portrait, user_id)
     VALUES($title, 0, 0, 0, 0, $goal, $tiering, $portrait, $user_id)`
  );

  let result;

  try {
    result = await statement.executeAsync({
      $title: activityName,
      $goal: goal,
      $tiering: tiering,
      $portrait: portraitIndex,
      $user_id: userId,
    });

  } finally {
    await statement.finalizeAsync();
    return result;
  }
};

export async function removeActivity(db: SQLiteDatabase, activityId: number) {

  const statement = await db.prepareAsync(
    `DELETE FROM activities WHERE id = $activityId`
  );

  let result;

  try {

    result = await statement.executeAsync({ $activityId: activityId });

  } finally {
    await statement.finalizeAsync();
    return result;
  }
};