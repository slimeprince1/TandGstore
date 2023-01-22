
import { NgModel } from "@angular/core";
import { HomepageComponent } from "./home/homepage/homepage.component";


const appRoute: Routes = [
    {path:'', component:HomepageComponent},
    {path:'Home', component: HomepageComponent},
    {path:'About', component: AboutComponent},
    {path:'Portfolio', component: HomepageComponent},
    {path:'Shop', component: ProductListingComponent},


    
]

@NgModel({

})
export class AppRoutingModule {

}
