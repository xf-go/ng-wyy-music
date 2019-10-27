import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';
import { SingerService } from 'src/app/services/singer.service';
import { forkJoin, Observable } from 'rxjs';
import { first } from 'rxjs/internal/operators';
import { Banner, HotTag, SongSheet, Singer } from 'src/app/services/data-type/common.type';

type HomeDataType = [Banner[], HotTag[], SongSheet[], Singer[]];

@Injectable({
  providedIn: 'root'
})
export class HomeResolveService implements Resolve<HomeDataType> {

  constructor(
    private homeService: HomeService,
    private singerService: SingerService
  ) { }

  resolve(): Observable<HomeDataType> {
    return forkJoin([
      this.homeService.getBanners(),
      this.homeService.getHotTags(),
      this.homeService.getPersonalSheetList(),
      this.singerService.getEnterSinger()
    ]).pipe(first()); // first()等同于take(1)
  }
}
