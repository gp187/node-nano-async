import * as Nano from "nano";
import {AsyncResponse} from "../AsyncResponse";
import {DocumentScopeAsync} from "./DocumentScopeAsync";

export interface ServerScopeAsync extends Nano.ServerScope {
    use<D>(db: string): DocumentScopeAsync<D>;

    scope<D>(db: string): DocumentScopeAsync<D>;

    // http://docs.couchdb.org/en/latest/api/server/authn.html#cookie-authentication
    authAsync(username: string, userpass: string): AsyncResponse<Nano.DatabaseAuthResponse>;

    // http://docs.couchdb.org/en/latest/api/server/authn.html#get--_session
    sessionAsync(): AsyncResponse<Nano.DatabaseSessionResponse>;

    // http://docs.couchdb.org/en/latest/api/server/common.html#get--_db_updates
    updatesAsync(params?: Nano.UpdatesParams): AsyncResponse<Nano.DatabaseUpdatesResponse>;

    uuidsAsync(num: number): AsyncResponse<any>;
}
