import {Provider } from "react-redux";
import {store} from "@/shared/store";
import {AppRouters} from "@/app/routers";


export function AppProvider() {
  

  return (
    <Provider store={store}>
      <AppRouters />
    </Provider>
  );
}
