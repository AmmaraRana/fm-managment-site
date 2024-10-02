"use client";

import { useState } from "react";
import React from 'react';

type UserSetting = {
    label: string;
    value: string | boolean;
    type: "text" | "toggle";
};

const mockSettings: UserSetting[] = [
    { label: "Username", value: "Anyone", type: "text" },
    { label: "Email", value: "anyone@gmail.com", type: "text" },
    { label: "Notification", value: "true", type: "text" },
    { label: "Dark Mode", value: false, type: "toggle" }, // Corrected boolean value
    { label: "Language", value: true, type: "toggle" },  // Corrected boolean value
];

function Setting() {
    const [UserSettings, setUserSetting] = useState<UserSetting[]>(mockSettings);

    const handleToggleChange = (index: number) => {
        const settingCopy = [...UserSettings];
        settingCopy[index].value = !settingCopy[index].value as boolean; // Corrected type casting
        setUserSetting(settingCopy);
    };

    return (
        <div className="w-full">
            <div className="overflow-x-auto mt-5 shadow-md ">
                <table className="min-w-full bg-white rounded-lg">
                    <thead className="bg-gray-800 text-white">
                        <tr>
                            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                                Setting
                            </th>
                            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                                Value
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {UserSettings.map((setting, index) => (
                            <tr className="hover:bg-blue-50" key={setting.label}>
                                <td className="py-4 px-4">{setting.label}</td>
                                <td className="py-2 px-4">
                                    {setting.type === "toggle" ? (
                                        <label className="inline-flex relative items-center cursor-pointer">
                                            <input
                                                type="checkbox"
                                                className="sr-only peer"
                                                checked={setting.value as boolean}
                                                onChange={() => handleToggleChange(index)} // Corrected onChange event
                                            />
                                            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-blue-400 peer-focus:ring-4
                                                transition peer-checked:after:translate-x-full peer-checked:after:border-white
                                                after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white
                                                after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all
                                                peer-checked:bg-blue-600"
                                            />
                                        </label>
                                    ) : (
                                        <input
                                            type="text" // Corrected input type
                                            className="px-4 py-2 border rounded-lg text-gray-500 focus:outline-none focus:border-blue-500"
                                            value={setting.value as string}
                                            onChange={(e) => {
                                                const settingCopy = [...UserSettings];
                                                settingCopy[index].value = e.target.value;
                                                setUserSetting(settingCopy);
                                            }}
                                        />
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Setting;
