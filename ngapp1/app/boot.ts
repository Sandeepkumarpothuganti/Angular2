/* Import the Bootstrap Dependency from Angular Core [for browser device app] */
import {bootstrap}  from 'angular2/platform/browser'

/* Import the created RootComponent [actual application] Dependency from App.component file */
import {MainComponent} from './main.component'

/* Bootstrap the root component without any module dependencies */
bootstrap(MainComponent,[]);// setting MainComponent as start component

// main{
//     employee emp=new employee();

// }