import NegroniRow from './NegroniRow'

export default function NegroniList() {
    const mockNegroniList = [
        {
            id: 1,
            location: 'Bar Officina, Lugano',
            evaluation: 'Infernale',
            comments: 'Fuoco puro, gin piccante, vermouth morbido. Finale lungo.'
        },
        {
            id: 2,
            location: 'Cantina Milano',
            evaluation: 'Diabolico',
            comments: 'Servito con ghiaccio affumicato, esperienza mistica.'
        },
        {
            id: 3,
            location: 'Negroni Heaven, Bologna',
            evaluation: 'Paradisiaco',
            comments: 'Equilibrio perfetto. Amaricante ma elegante.'
        }
    ]

    return (
        <div className="space-y-4 mt-6">
            {mockNegroniList.map(negroni => (
                <NegroniRow
                    key={negroni.id}
                    location={negroni.location}
                    evaluation={negroni.evaluation}
                    comments={negroni.comments}
                />
            ))}
        </div>
    )
}
