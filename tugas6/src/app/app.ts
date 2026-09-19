import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  pageTitle = 'Dashboard';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.getTitle(this.activatedRoute.root))
      )
      .subscribe((title) => {
        this.pageTitle = title;
      });
  }

  private getTitle(route: ActivatedRoute): string {
    let current = route;

    while (current.firstChild) {
      current = current.firstChild;
      if (current.snapshot.data['title']) {
        return current.snapshot.data['title'];
      }
    }

    return 'Dashboard';
  }
}
