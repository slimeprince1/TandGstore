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

  ngAfterInit() {
    setReloadStatus(false);
  }

  ngOnDestroy() {
    setReloadStatus(true)
  }

  reloadCurrentRoute() {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }
}
