regarding task 3. no need to give me new config files. I gave the existing config files in the previous task. 
You only need to verify that they are still valid after adding the code and dependencies.
regarting task 2. in vscode I see the folowing errors in index.ts:

a. where: import { Queue as QueueMQ, Worker, QueueScheduler } from 'bullmq';
error: Module '"bullmq"' has no exported member 'QueueScheduler'.ts(2305)
import QueueScheduler

b. where: passport.deserializeUser((user, cb) => {
  cb(null, user);
});
 error: Argument of type 'unknown' is not assignable to parameter of type 'false | User | null | undefined'.ts(2345)

c. where: const createQueueMQ = (name: string) => new QueueMQ(name, { connection: redisOptions });
error: Type '{ port: number; host: string; password: string; tls: boolean; }' is not assignable to type 'ConnectionOptions | undefined'.
  Type '{ port: number; host: string; password: string; tls: boolean; }' is not assignable to type 'RedisOptions'.
    Types of property 'tls' are incompatible.
      Type 'boolean' has no properties in common with type 'ConnectionOptions'.ts(2322)

d. where: app.use(passport.session({}));
error: Argument of type '{}' is not assignable to parameter of type 'SessionOptions'.
  Property 'pauseStream' is missing in type '{}' but required in type 'SessionOptions'.ts(2345)
index.d.ts(215, 9): 'pauseStream' is declared here.

e. where: if (opts.delay) {
      opts.delay = +opts.delay * 1000;
    }
error: Property 'delay' does not exist on type 'string | ParsedQs | string[] | ParsedQs[]'.
  Property 'delay' does not exist on type 'string'.ts(2339)

f. where: exampleBullMq.add('Add', { title: req.query.title }, opts);
error: Argument of type 'string | ParsedQs | string[] | ParsedQs[]' is not assignable to parameter of type 'JobsOptions | undefined'.
  Type 'string[]' has no properties in common with type 'JobsOptions'.ts(2345)
