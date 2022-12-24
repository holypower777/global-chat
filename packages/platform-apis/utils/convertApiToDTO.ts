const snakeToCamel = (s: string): string => {
    return s.replace(/([-_][a-z])/gi, ($1) => {
        return $1.toUpperCase().replace('_', '');
    });
};

/** datesNames is an array of date field in camelCase */
const convertApiToDTO = <T>(api: unknown, datesNames: Array<string> = []): T => {
    if (Array.isArray(api)) {
        return api.map((e) => convertApiToDTO(e, datesNames)) as T;
    }

    if (api === Object(api)) {
        const n: Record<string, unknown> = {};
        Object.entries(api as Record<string, unknown>).forEach(([key, value]) => {
            const newKey = snakeToCamel(key);
            if (datesNames.includes(newKey) && Number.isInteger(value)) {
                n[newKey] = new Date(value as number);
                return;
            }
            n[newKey] = convertApiToDTO(value, datesNames);
        });
        return n as T;
    }

    return api as T;
};

export default convertApiToDTO;
