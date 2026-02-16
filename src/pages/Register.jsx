import React from "react"
import { Link } from "react-router"
import Card from "../components/Card"
import Button from "../components/Button"
import Badge from "../components/Badge"
import { Mail, Lock, UserPlus } from "lucide-react"

export default function Register() {
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white flex items-center justify-center px-4">
      <div className="w-full max-w-md">

        <div className="text-center mb-6">
          <Badge status="success">Nouveau compte</Badge>
          <h1 className="text-3xl font-bold text-gray-900 mt-4">
            Créer votre compte
          </h1>
          <p className="text-gray-600 mt-2">
            Commencez à déployer vos applications en quelques minutes
          </p>
        </div>

        <Card className="p-8">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mot de passe
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                />
              </div>
            </div>
            <Button variant="primary" size="lg" className="w-full">
              <UserPlus className="w-5 h-5" />
              Créer le compte
            </Button>

            <div className="text-center text-sm text-gray-600">
              Déjà inscrit ?{" "}
              <Link to="/login" className="text-emerald-600 font-medium hover:underline">
                Se connecter
              </Link>
            </div>

          </form>
        </Card>
      </div>
    </div>
  )
}
