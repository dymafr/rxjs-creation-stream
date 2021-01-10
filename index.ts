screenLog.init(); // affiche le log de la console
// Cliquez sur la flèche de rafraichissement dans la fenêtre de droite, juste à gauche de l'url pour relancer.

import { Observable, interval } from 'rxjs';
import { tap, take } from 'rxjs/operators';

function createStream(name: string, iterations: number, intervalle: number): Observable<any> {
  return interval(intervalle).pipe(
    take(iterations),
    tap(val => console.log(`[ Stream ${name} ] : ${val}`))
  )
}

const streamA = createStream('A', 3, 1000).subscribe();
const streamB = createStream('B', 3, 500).subscribe();