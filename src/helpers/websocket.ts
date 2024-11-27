import Echo from 'laravel-echo'
import Pusher from 'pusher-js'
    ;(window as any).Pusher = Pusher
const echo = new Echo({
    broadcaster: 'pusher',
    id: process.env.REACT_APP_ID,
    key: process.env.REACT_APP_KEY,
    wsHost: process.env.REACT_APP_HOST,
    wsPort: process.env.REACT_APP_PORT,
    wssPort: process.env.REACT_APP_PORT,
    cluster: process.env.REACT_APP_CLUSTER,
    forceTLS: false,
    encrypted: true,
    disableStats: true,
    enabledTransports: ['ws', 'wss'],
})
export default echo