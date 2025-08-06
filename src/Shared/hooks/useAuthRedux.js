import { useDispatch, useSelector } from 'react-redux';

export function useAuthRedux() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  return { ...auth, dispatch };
}
