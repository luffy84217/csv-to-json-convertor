export interface StoreInterface {
    jsonData: {
        [prop: string]: string;
    }[];
    setJsonData: React.Dispatch<React.SetStateAction<{
        [prop: string]: string;
    }[]>>;
    csvData: string;
    setCsvData: React.Dispatch<React.SetStateAction<string>>
};
