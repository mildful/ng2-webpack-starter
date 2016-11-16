import { Injectable } from '@angular/core';

@Injectable()
export class FakeService {

  private numbers: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  getNumbers(): number[] {
    return this.numbers;
  }
}