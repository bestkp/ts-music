import {
  AxiosInstance as AxiosInstance2,
  CancelTokenSource as CancelTokenSource2,
  AxiosResponse as AxiosResponse2,
} from "axios";

declare global {
  interface AxiosResponse extends AxiosResponse2 {
    data: any
  }
  interface AxiosInstance extends AxiosInstance2 {

  }
  interface CancelTokenSource extends CancelTokenSource2 {

  }
  interface Window { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any }
}