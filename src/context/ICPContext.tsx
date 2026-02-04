import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

type ICPType = 'reseller' | 'prep';

interface ICPContextProps {
    icp: ICPType;
    setIcp: (type: ICPType) => void;
}

const ICPContext = createContext<ICPContextProps | undefined>(undefined);

export const ICPProvider = ({ children }: { children: ReactNode }) => {
    const [icp, setIcp] = useState<ICPType>('reseller');

    return (
        <ICPContext.Provider value={{ icp, setIcp }}>
            {children}
        </ICPContext.Provider>
    );
};

export const useICP = () => {
    const context = useContext(ICPContext);
    if (!context) {
        throw new Error('useICP must be used within an ICPProvider');
    }
    return context;
};
