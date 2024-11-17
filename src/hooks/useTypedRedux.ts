import { useSelector, useDispatch, useStore } from 'react-redux';
import store from '../services';

type RootState = ReturnType<typeof store.getState>;
type Dispatch = typeof store.dispatch;

export const useTypedSelector = useSelector.withTypes<RootState>();
export const useTypedDispatch = useDispatch.withTypes<Dispatch>();
export const useTypedStore = useStore.withTypes<typeof store>;
