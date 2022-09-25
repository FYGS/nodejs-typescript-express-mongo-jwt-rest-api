import 'dotenv/config';
import 'module-alias/register';
import validateEnv from '@/utils/validateEnv';
import PostController from '@/resources/post/post.controller';
import UserController from '@/resources/user/user.controller';
import App from './app';

validateEnv();

const app = new App([
  new PostController(),
  new UserController()
], Number(process.env.PORT));

app.listen();
