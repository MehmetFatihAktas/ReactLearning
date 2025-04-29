import React from 'react';
import { Stack } from 'expo-router';

export default function LessonLayout() {
    return (
        <Stack>
            <Stack.Screen
                name="[id]"
                options={{
                    headerShown: false,
                    animation: 'slide_from_right',
                }}
            />
        </Stack>
    );
} 