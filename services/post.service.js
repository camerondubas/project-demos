let self = {};

import * as angular from 'angular';
import BaseService from './base.service';

class PostService extends BaseService {
  constructor($q, $resource) {
    Object.assign(self, {$q, $resource});
    super('/posts', self);
  }
}

export default angular.module('app.services.post', [])
  .service('postService', PostService)
  .name;
