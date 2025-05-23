// import React, { useContext } from 'react';
// import { Navigate, Outlet } from 'react-router';
// import { AuthContext } from '../../Context/AuthContext';
// import Loader from '../Loader/Loader';

// const PrivateRoute = () => {
//   const { user, loading } = useContext(AuthContext);

//   if (loading) {
//     return <Loader></Loader>
//   }

// //   return user ? <div>{children}</div> : <Navigate to="/login" replace />;
// // if(!user){
// //         return <Navigate state={{ from: location }} to='/login'></Navigate>
// //     }
//     return (
//         <div>
//             {children}
//         </div>
//     );
// };

// export default PrivateRoute;


import React, { use } from 'react';

import { Navigate, useLocation } from 'react-router';

import { AuthContext } from '../../Context/AuthContext';
import Loader from '../Loader/Loader';

const PrivateRoute = ({children}) => {
    const {user ,loading} = use(AuthContext)
    const location = useLocation();
    if (loading) return <Loader></Loader>;
    if(!user){
        return <Navigate state={{ from: location }} to='/login'></Navigate>
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;
