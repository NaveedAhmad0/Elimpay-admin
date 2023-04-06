import React, { useState, createContext } from "react";

const userContext = createContext(null);
const UserRoleContextConsumer = userContext.Consumer;

export const UserProvider = ({ children }) => {
	const [isAdmin, setIsAdmin] = useState(false);
	const [isMerchant, setIsMerchant] = useState(false);
	const [isUser, setIsUser] = useState(false);
	const [userDetails, setUserDetails] = useState({
		isLoggedIn: false,
	});

	const updateContext = (data) => {
		const { isLoggedIn } = data;

		setUserDetails({
			isLoggedIn,
		});
	};
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
				...userDetails,
				isAdmin,
				isMerchant,
				isUser,
				getAdminPanel,
				updateContext: updateContext,
				getMerchantPanel,
				getUserPanel,
			}}>
			{children}
		</userContext.Provider>
	);
};

export { userContext, UserRoleContextConsumer };
