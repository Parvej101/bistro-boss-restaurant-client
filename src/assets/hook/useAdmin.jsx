import { useQuery } from '@tanstack/react-query';

import useAxiosSecure from './useAxiosSecure';
import Auth from './Auth';

const useAdmin = () => {
    const { user } = Auth()
    const axiosSecure = useAxiosSecure();
    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user.email}`);
            console.log(res.data);
            return res.data?.admin;
        }
    })
    return [isAdmin, isAdminLoading]
};
export default useAdmin;