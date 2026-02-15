import React from 'react'
import Button from '../components/Button'
import Card from '../components/Card'
import Badge from '../components/Badge'
import { Rocket, Activity, Shield, Zap, DollarSign, GitBranch, ArrowRight, BookOpen } from 'lucide-react'

export default function Home() {
  const features = [
    {
      icon: Rocket,
      title: 'Déploiement Instantané',
      description: 'Déployez vos applications Docker en quelques minutes via GitHub ou archive ZIP.'
    },
    {
      icon: Activity,
      title: 'Monitoring en Temps Réel',
      description: 'Surveillez vos applications avec des logs en direct et des alertes instantanées.'
    },
    {
      icon: Shield,
      title: 'Sécurisé par Défaut',
      description: 'Isolement des conteneurs, HTTPS automatique et validation des Dockerfiles.'
    },
    {
      icon: Zap,
      title: 'Performance Optimale',
      description: 'Infrastructure moderne avec gestion intelligente des ressources.'
    },
    {
      icon: DollarSign,
      title: 'Tarification Flexible',
      description: 'Plans adaptés aux besoins des startups, PME et grandes entreprises.'
    },
    {
      icon: GitBranch,
      title: 'Intégration Continue',
      description: 'Build automatique avec gestion des erreurs et rollback facile.'
    }
  ]

  const steps = [
    {
      number: '01',
      title: 'Importer le Code',
      description: 'Connectez votre dépôt GitHub ou uploadez une archive contenant un Dockerfile.'
    },
    {
      number: '02',
      title: 'Configuration',
      description: 'Nommez votre projet et définissez les paramètres de déploiement.'
    },
    {
      number: '03',
      title: 'Déploiement',
      description: 'Notre système construit et déploie automatiquement votre application.'
    },
    {
      number: '04',
      title: 'Accès Instantané',
      description: 'Recevez une URL unique et accédez immédiatement à votre application.'
    }
  ]

  const stats = [
    { value: '< 5 min', label: 'Temps de déploiement' },
    { value: '99.9%', label: 'Disponibilité' },
    { value: '100%', label: 'Gratuit pour MVP' },
    { value: '24/7', label: 'Monitoring' }
  ]

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-linear-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center text-white font-bold">
                D
              </div>
              <span className="text-xl font-bold text-gray-900">DeployHub</span>
              <Badge status="info" className="ml-2">Beta</Badge>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
                Fonctionnalités
              </a>
              <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">
                Comment ça marche
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                Documentation
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                Tarifs
              </a>
            </div>
            
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm">
                Connexion
              </Button>
              <Button variant="primary" size="sm">
                Démarrer
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto text-center">
          <Badge status="success" className="mb-6">
            Solution professionnelle de déploiement
          </Badge>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Déployez vos applications
            <span className="block text-emerald-500 mt-2">
              en quelques minutes
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            Plateforme moderne de déploiement automatisé pour applications conteneurisées. 
            Transformez votre code en application web accessible sans complexité d'infrastructure.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="primary" size="lg">
              <ArrowRight className="w-5 h-5" />
              Démarrer gratuitement
            </Button>
            <Button variant="outline" size="lg">
              <BookOpen className="w-5 h-5" />
              Voir la documentation
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto mt-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-emerald-500 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-4 sm:px-6 lg:px-8 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Fonctionnalités Principales
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tout ce dont vous avez besoin pour déployer et gérer vos applications en toute simplicité
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card key={index} hover className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 mb-4">
                    <Icon className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="px-4 sm:px-6 lg:px-8 py-20 bg-linear-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Comment ça marche ?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Quatre étapes simples pour déployer votre application
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-linear-to-br from-emerald-500 to-emerald-600 text-white text-2xl font-bold mb-4 shadow-lg">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto">
          <Card variant="gradient" className="text-center p-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Prêt à déployer votre première application ?
            </h2>
            <p className="text-lg text-emerald-100 mb-8 max-w-2xl mx-auto">
              Rejoignez les développeurs et équipes qui simplifient leurs déploiements avec DeployHub
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Créer un compte
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-emerald-400">
                Découvrir plus
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50 px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-linear-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center text-white font-bold">
                  D
                </div>
                <span className="text-xl font-bold text-gray-900">DeployHub</span>
              </div>
              <p className="text-gray-600 mb-4 max-w-md">
                Plateforme moderne de déploiement automatisé pour applications conteneurisées. 
                Simplifiez vos déploiements et concentrez-vous sur l'innovation.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                  GitHub
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                  Twitter
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Produit</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Fonctionnalités</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Tarifs</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Documentation</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Guide de démarrage</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Entreprise</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">À propos</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Carrières</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Support</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2026 DeployHub. Tous droits réservés.
            </p>
            <div className="flex gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-gray-900 transition-colors">Mentions légales</a>
              <a href="#" className="hover:text-gray-900 transition-colors">Confidentialité</a>
              <a href="#" className="hover:text-gray-900 transition-colors">CGU</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
