import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-4xl mx-auto p-8">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Mon Budget Mensuel</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-lg">
              <h2 className="font-bold">Revenus</h2>
              <p className="text-2xl">$5,000</p>
            </div>
            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg">
              <h2 className="font-bold">Dépenses</h2>
              <p className="text-2xl">$3,500</p>
            </div>
            <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 rounded-lg">
              <h2 className="font-bold">Solde</h2>
              <p className="text-2xl">$1,500</p>
            </div>
          </div>

          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-700">Transactions Récentes</h2>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Ajouter une transaction
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <tr>
                  <th className="py-3 px-6 text-left">Date</th>
                  <th className="py-3 px-6 text-left">Description</th>
                  <th className="py-3 px-6 text-center">Catégorie</th>
                  <th className="py-3 px-6 text-right">Montant</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 px-6 text-left whitespace-nowrap">2024-06-20</td>
                  <td className="py-3 px-6 text-left">Salaire</td>
                  <td className="py-3 px-6 text-center"><span className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">Revenu</span></td>
                  <td className="py-3 px-6 text-right text-green-600">$5,000.00</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 px-6 text-left">2024-06-15</td>
                  <td className="py-3 px-6 text-left">Loyer</td>
                  <td className="py-3 px-6 text-center"><span className="bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs">Logement</span></td>
                  <td className="py-3 px-6 text-right text-red-600">-$1,500.00</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 px-6 text-left">2024-06-10</td>
                  <td className="py-3 px-6 text-left">Épicerie</td>
                  <td className="py-3 px-6 text-center"><span className="bg-yellow-200 text-yellow-600 py-1 px-3 rounded-full text-xs">Nourriture</span></td>
                  <td className="py-3 px-6 text-right text-red-600">-$450.75</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;