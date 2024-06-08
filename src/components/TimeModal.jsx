// src/components/TimeModal.js

import React, { useState } from 'react';
import { MdAccessTime } from 'react-icons/md';

const TimeModal = ({ isOpen, onClose, onSave }) => {
    const [hour, setHour] = useState('12');
    const [minute, setMinute] = useState('00');
    const [period, setPeriod] = useState('AM');

    const handleSave = () => {
        onSave(`${hour}:${minute} ${period}`);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded shadow-lg">
                <h5 className="py-4">Enter Time</h5>
                <div className="flex flex-col items-center space-y-2">
                    <div className="flex space-x-2">
                        <div className='flex flex-col'>
                            <input
                                type="number"
                                value={hour}
                                onChange={(e) => setHour(e.target.value)}
                                className="border-2 py-2 px-0 text-center text-2xl focus:border-blue-700 focus:outline-none rounded"
                                min="1"
                                max="12"
                            />
                            <span className="xs">Hour</span>
                        </div>
                        <span className="text-2xl">:</span>
                        <div className="flex flex-col">
                            <input
                                type="number"
                                value={minute}
                                onChange={(e) => setMinute(e.target.value)}
                                className="border-2 py-2 px-0 text-center text-2xl focus:border-blue-700 focus:outline-none rounded"
                                min="0"
                                max="59"
                            />
                            <span className="xs">Minutes</span>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <div className="flex flex-col border-2 rounded-md ">
                                <button
                                    onClick={() => setPeriod('AM')}
                                    className={`px-2 py-2 text-sm ${period === 'AM' ? 'bg-purple-100 text-blue-900' : 'bg-white text-gray-700'} focus:outline-none `}
                                >
                                    AM
                                </button>
                                <button
                                    onClick={() => setPeriod('PM')}
                                    className={`px-2 py-2 text-sm ${period === 'PM' ? 'bg-purple-100 text-blue-900' : 'bg-white text-gray-700'} focus:outline-none `}
                                >
                                    PM
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center w-full">
                        <MdAccessTime />
                        <div>
                            <button onClick={onClose} className="text-blue-500 px-4 py-1">Cancel</button>
                            <button onClick={handleSave} className="text-blue-500 px-4 py-1">Ok</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TimeModal;
