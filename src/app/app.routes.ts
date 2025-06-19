import { Routes, UrlSegment } from '@angular/router';
import { AboutComponent } from './share/components/about/about.component';
import { UserProfileComponent } from './features/components/user-profile/user-profile.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'/themes',
        pathMatch:'full'

    },
    {
        path:'themes',
        loadComponent:()=>import('./features/components/list-theme/list-theme.component').then(m=>m.ListThemeComponent)
    },
    {
        path:'quiz/:quizId',
        loadComponent:()=>import('./features/components/quiz/quiz.component').then(m=>m.QuizComponent)
    
    },
    {
        path:'about',
        component:AboutComponent
    },
    {
        // /@username
        matcher: (url)=>{
        if (url.length === 1 && url[0].path.match(/^@[\w]+$/gm))
        {
                return {consumed:url, posParams:{username:new UrlSegment(url[0].path.slice(1),{})}}
        }
            return null;
        },
        component:UserProfileComponent
    },
     {
        path:'users',
        loadComponent:()=>import('./features/components/list-user/list-user.component').then(m=>m.ListUserComponent),
    },
    {
        path:'users/:id',

         children:[
            {
                path:'',
                redirectTo:'/profile',
                pathMatch:'full'
            },
            {
                path:'profile',//user/:id/profile
                loadComponent:()=>import('./features/components/user-profile/user-profile.component').then(m=>m.UserProfileComponent)
            },
             {
                path:'setting',
                loadComponent:()=>import('./features/components/user-settings/user-settings.component').then(m=>m.UserSettingsComponent)
            }
        ]
    }
];
