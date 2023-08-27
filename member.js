function skillsMember() {
    return {
        restrict: 'E',
        scope: {
            member: '='
        },  
        templateUrl: 'modules/skills/views/member.html',
        controller: 'SkillsMemberController',
        controllerAs: 'vm',
        bindToController: true
    }
}