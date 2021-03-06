"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isServerScope_1 = require("./isServerScope");
var promisify_1 = require("./promisify");
var Wrapper = /** @class */ (function () {
    function Wrapper() {
    }
    Wrapper.wrapServerScope = function (serverScope) {
        var serverScopeAsync = serverScope;
        var use = serverScope.use, scope = serverScope.scope;
        serverScopeAsync.db = Wrapper.wrapDatabaseScope(serverScopeAsync.db);
        serverScopeAsync.use = function (db) { return Wrapper.wrapDocumentScope(use(db)); };
        serverScopeAsync.scope = function (db) { return Wrapper.wrapDocumentScope(scope(db)); };
        serverScopeAsync.authAsync = promisify_1.promisify(serverScopeAsync.auth);
        serverScopeAsync.sessionAsync = promisify_1.promisify(serverScopeAsync.session);
        serverScopeAsync.updatesAsync = promisify_1.promisify(serverScopeAsync.updates);
        serverScopeAsync.uuidsAsync = promisify_1.promisify(serverScopeAsync.uuids);
        return serverScopeAsync;
    };
    Wrapper.wrapDatabaseScope = function (databaseScope) {
        var databaseScopeAsync = databaseScope;
        var use = databaseScope.use;
        databaseScopeAsync.use = function (db) { return Wrapper.wrapDocumentScope(use(db)); };
        databaseScopeAsync.createAsync = promisify_1.promisify(databaseScopeAsync.create);
        databaseScopeAsync.getAsync = promisify_1.promisify(databaseScopeAsync.get);
        databaseScopeAsync.destroyAsync = promisify_1.promisify(databaseScopeAsync.destroy);
        databaseScopeAsync.listAsync = promisify_1.promisify(databaseScopeAsync.list);
        databaseScopeAsync.compactAsync = promisify_1.promisify(databaseScopeAsync.compact);
        databaseScopeAsync.replicateAsync = promisify_1.promisify(databaseScopeAsync.replicate);
        databaseScopeAsync.changesAsync = promisify_1.promisify(databaseScopeAsync.changes);
        databaseScopeAsync.updatesAsync = promisify_1.promisify(databaseScopeAsync.updates);
        return databaseScopeAsync;
    };
    Wrapper.wrapDocumentScope = function (documentScope) {
        var documentScopeAsync = documentScope;
        documentScopeAsync.infoAsync = promisify_1.promisify(documentScopeAsync.info);
        documentScopeAsync.replicateAsync = promisify_1.promisify(documentScopeAsync.replicate);
        documentScopeAsync.compactAsync = promisify_1.promisify(documentScopeAsync.compact);
        documentScopeAsync.changesAsync = promisify_1.promisify(documentScopeAsync.changes);
        documentScopeAsync.authAsync = promisify_1.promisify(documentScopeAsync.auth);
        documentScopeAsync.sessionAsync = promisify_1.promisify(documentScopeAsync.session);
        documentScopeAsync.insertAsync = promisify_1.promisify(documentScopeAsync.insert);
        documentScopeAsync.getAsync = promisify_1.promisify(documentScopeAsync.get);
        documentScopeAsync.headAsync = promisify_1.promisify(documentScopeAsync.head);
        documentScopeAsync.copyAsync = promisify_1.promisify(documentScopeAsync.copy);
        documentScopeAsync.destroyAsync = promisify_1.promisify(documentScopeAsync.destroy);
        documentScopeAsync.bulkAsync = promisify_1.promisify(documentScopeAsync.bulk);
        documentScopeAsync.listAsync = promisify_1.promisify(documentScopeAsync.list);
        documentScopeAsync.fetchAsync = promisify_1.promisify(documentScopeAsync.fetch);
        documentScopeAsync.fetchRevsAsync = promisify_1.promisify(documentScopeAsync.fetchRevs);
        documentScopeAsync.showAsync = promisify_1.promisify(documentScopeAsync.show);
        documentScopeAsync.atomicAsync = promisify_1.promisify(documentScopeAsync.atomic);
        documentScopeAsync.updateWithHandlerAsync = promisify_1.promisify(documentScopeAsync.updateWithHandler);
        documentScopeAsync.searchAsync = promisify_1.promisify(documentScopeAsync.search);
        documentScopeAsync.spatialAsync = promisify_1.promisify(documentScopeAsync.spatial);
        documentScopeAsync.viewAsync = promisify_1.promisify(documentScopeAsync.view);
        documentScopeAsync.viewWithListAsync = promisify_1.promisify(documentScopeAsync.viewWithList);
        documentScopeAsync.multipart.insertAsync = promisify_1.promisify(documentScopeAsync.multipart.insert);
        documentScopeAsync.multipart.getAsync = promisify_1.promisify(documentScopeAsync.multipart.get);
        documentScopeAsync.attachment.insertAsync = promisify_1.promisify(documentScopeAsync.attachment.insert);
        documentScopeAsync.attachment.getAsync = promisify_1.promisify(documentScopeAsync.attachment.get);
        documentScopeAsync.attachment.destroyAsync = promisify_1.promisify(documentScopeAsync.attachment.destroy);
        return documentScopeAsync;
    };
    Wrapper.wrap = function (nano) {
        return isServerScope_1.isServerScope(nano) ? Wrapper.wrapServerScope(nano) : Wrapper.wrapDocumentScope(nano);
    };
    return Wrapper;
}());
exports.Wrapper = Wrapper;
//# sourceMappingURL=Wrapper.js.map