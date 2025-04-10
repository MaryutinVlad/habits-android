import { DarkTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { SQLiteProvider, SQLiteDatabase } from 'expo-sqlite';
import { useDrizzleStudio } from "expo-drizzle-studio-plugin";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    Podkova: require("@/assets/fonts/Podkova.ttf"),
    PoiretOne: require("@/assets/fonts/PoiretOne-Regular.ttf"),
    PottaOne: require("@/assets/fonts/PottaOne-Regular.ttf"),
  });

  const createDbIfNeeded = async (db: SQLiteDatabase) => {
    try {
      /*await db.execAsync(`
        PRAGMA journal_mode = WAL;
        DROP TABLE users;
        DROP TABLE activities;
      `)*/
        await db.execAsync(`
          PRAGMA journal_mode = WAL;
          CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            day INTEGER,
            row INTEGER,
            exp INTEGER,
            actTotal INTEGER,
            actMastered INTEGER,
            lastUpdated TEXT
          );
          CREATE TABLE IF NOT EXISTS activities (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            day INTEGER,
            row INTEGER,
            cur INTEGER,
            total INTEGER,
            goal INTEGER,
            tiering TEXT,
            portrait INTEGER,
            user_id INTEGER,
            FOREIGN KEY (user_id) REFERENCES users(id)
          );
        `).then(result => console.log(result))
      
    } catch (error) {
      console.error("Error creating database:", error);
    }
  };

  useDrizzleStudio();

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <SQLiteProvider databaseName='habits.db' onInit={createDbIfNeeded}>
      <ThemeProvider value={DarkTheme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </SQLiteProvider>
  );
}
