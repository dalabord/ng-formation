enum Grade {first, second, third, fourth};

export interface Matter {
    label: string;
    grade: Grade;
    open: boolean;
    maxCapacity?: number;
    building: 'Cesar' | 'Modigliani' | 'Vellasquez';
}