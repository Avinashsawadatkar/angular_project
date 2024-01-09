# angular_project
This is my first Angular Project

to create module
ng g m (module name) --routing
in this used to generate two file 1.routing.module.ts 2.modul.ts

to create component
ng g c (component name)


Lazy loading concept
/path 1: module path==> into app.routing.ts and /path2:component inside module==>inside particular modules routing.ts

  { path :"user",loadChildren:()=>import('./user/user.module').then(mod=>mod.UserModule)}