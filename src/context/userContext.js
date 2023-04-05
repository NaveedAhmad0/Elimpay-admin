import React, { useState, createContext } from "react";

const userContext = createContext(null);

export const UserProvider = ({ children }) => {
	const [isAdmin, setIsAdmin] = useState(false);
	const [isMerchant, setIsMerchant] = useState(false);
	const [isUser, setIsUser] = useState(false);

	const getAdminPanel = () => {
		setIsAdmin(!isAdmin);
		console.log(isAdmin);
	};
	const getMerchantPanel = () => {
		setIsMerchant(!isMerchant);
		console.log(isMerchant);
	};
	const getUserPanel = () => {
		setIsUser(!isUser);
		console.log(isUser);
	};

	// useEffect(() => {
	// 	getAdminPanel();
	// }, [isAdmin]);
	// useEffect(() => {
	// 	getAdminPanel();
	// }, [isMerchant]);
	// useEffect(() => {
	// 	getUserPanel();
	// }, [isUser]);

	return (
		<userContext.Provider
			value={{
				isAdmin,
				isMerchant,
				isUser,
				getAdminPanel,
				getMerchantPanel,
				getUserPanel,
			}}>
			{children}
		</userContext.Provider>
	);
};

export default userContext;
