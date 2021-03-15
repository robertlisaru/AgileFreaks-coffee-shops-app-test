import { Marker, Map } from 'pigeon-maps'

const osmProvider = (x, y, z) => {
    const s = String.fromCharCode(97 + ((x + y + z) % 3))
    return `https://${s}.tile.openstreetmap.org/${z}/${x}/${y}.png`
}

const MyMap = ({ shops }) => {
    return shops ? (
        <Map provider={osmProvider}
            defaultCenter={[45.795, 24.147]}
            defaultZoom={4}
            width={600}
            height={400}>
            {shops.map((shop) => {
                return (
                    <Marker
                        key={shop.id}
                        anchor={[parseFloat(shop.x), parseFloat(shop.y)]}
                        color='black'
                        payload={shop.id}
                        onClick={({ event, anchor, payload }) => {
                            console.log('Clicked marker nr: ', payload)
                        }}
                    />
                )
            })
            }
        </Map >) : null
}

export default MyMap
