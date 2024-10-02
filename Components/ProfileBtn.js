import { useSession } from 'next-auth/react';

const ProfileBtn = () => {
    const session = useSession();
  return (
    <div ><img className='rounded-3xl' width={40} src={session.data.user?.image}></img></div>
  )
}

export default ProfileBtn;