import * as angular from 'angular';
class ProjectService {
  constructor() {
    this.projects = [
      {
        title: 'RSS API',
        description: 'A Node API that takes in any RSS Feed URL and returns it in JSON. Enables getting around CORS issues.',
        color: '#3F51B5',
        sref: 'app.rss'
      },
      {
        title: 'Postgres Search',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque doloribus dolorum eos est harum impedit modi. ',
        color: '#7CB342',
        sref: 'app.search'
      },
      {
        title: 'Promise Buttons',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque doloribus dolorum eos est harum impedit modi. ',
        color: '#7CB342',
        sref: 'app.button'
      }
    ];
  }

  getProject(searchArray) {
    return this.projects.find(project => project[searchArray[0]] === searchArray[1]);
  }
}

export default angular.module('app.services.project', [])
.service('projectService', ProjectService)
  .name;
