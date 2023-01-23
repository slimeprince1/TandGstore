import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getReloadStatus, setReloadStatus } from 'src/app/utils/home_reload';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    // if (getReloadStatus() === 'true') {
    //   alert('i got here');
    //   location.reload();
    //   setReloadStatus(false);
    // }
   
  }
  melaninClick(){
    this.router.navigate(['/melanin'])
  }

  tangledClick(){
    this.router.navigate(['/melanin'])
  }

  mirrorClick(){
    this.router.navigate(['/mirror'])
  }

  veiledClick(){
    this.router.navigate(['/veiled'])
  }

hiddenClick(){
    this.router.navigate(['/hidden'])
  }

chiefClick(){
  this.router.navigate(['/chief'])
}
berakuClick(){
  this.router.navigate(['/beraku'])
}

monoClick(){
  this.router.navigate(['/mono'])
  }

rawlingsClick(){
   this.router.navigate(['/rawlings'])
  }





  // ngAfterInit() {
  //   setReloadStatus(false);
  // }

  // ngOnDestroy() {
  //   setReloadStatus(true);
  // }

  // reloadCurrentRoute() {
  //   const currentUrl = this.router.url;
  //   this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
  //     this.router.navigate([currentUrl]);
  //   });
  // }
}
