import * as angular from 'angular';

declare module 'angular' {
    interface IRootScopeService {
        //0 params, or 1 param that's either a string or a scope
        $safeApply(scopeOrExpression?: string | angular.IScope | angular.IRootScopeService): void;
        //1 param that's an update function
        $safeApply(fn: (scope: angular.IScope | angular.IRootScopeService) => void): void;
        //2 or 3 params, a scope, an update function, and an optional boolean to force
        $safeApply(scope: angular.IScope | angular.IRootScopeService, fn: (scope: angular.IScope | angular.IRootScopeService) => void, force?: boolean): void;
    }
}
