import { AlertTriangle, ArrowRight, FileText, Shield, Users, Vote } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <section className='bg-gradient-to-br from-orange-50 via-white to-green-50 py-20'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='text-center'>
                        <div className='flex justify-center mb-6'>
                            <div className='bg-gradient-to-r from-orange-500 to-green-600 p-4 rounded-full'>
                                <Vote className='h-12 w-12 text-white' />
                            </div>
                        </div>
                        <h1 className='text-5xl font-bold text-gray-900 mb-6'>Protecting India's <span className='text-orange-600'>Democratic</span> Process</h1>
                        <p className='text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed'>
                            A platform to raise awareness about vote chori (election fraud) and empower citizens
                            to share their experiences, ensuring transparency and fairness in our electoral system.
                        </p>
                        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                            <Link to='/submit-story' className='bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200 flex items-center justify-center space-x-2'>
                                <FileText className='h-5 w-5' />
                                <span>Share Your Story</span>
                            </Link>
                            <Link to='stories' className='border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 hover:text-white transition-colors duration-200 flex items-center justify-center space-x-2'>
                                <Users />
                                <span>Read Stories</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className='py-16 bg-white'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
                        <div className='p-6'>
                            <div className='text-4xl font-bold text-orange-600 mb-2'>500+</div>
                            <div className='text-gray-600'>Stories Shared</div>
                        </div>
                        <div className='p-6'>
                            <div className='text-4xl font-bold text-green-600 mb-2'>28</div>
                            <div className='text-gray-600'>States Covered</div>
                        </div>
                        <div className='p-6'>
                            <div className='text-4xl font-bold text-blue-600 mb-2'>10k+</div>
                            <div className='text-gray-600'> Citizens Aware</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='bg-gray-50 py-20'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='text-center mb-12'>
                        <h2 className='text-3xl font-bold text-gray-900 mb-4'>
                            Understanding Vote Chori
                        </h2>
                        <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
                            Election fraud undermines the very foundation of our democracy. Learn about common practices and how to identify them.
                        </p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        <div className='bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200'>
                            <div className='text-red-500 mb-4'>
                                <AlertTriangle className='h-8 w-8' />
                            </div>
                            <h3 className='text-xl font-semibold mb-3 text-gray-900'>Voter Intimidation</h3>
                            <p className='text-gray-600'>
                                Threats or coercion used to influence voter choices or prevent people from voting freely.
                            </p>
                        </div>

                        <div className='bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200'>
                            <div className='text-red-500 mb-4'>
                                <Vote className='h-8 w-8' />
                            </div>
                            <h3 className='text-xl font-semibold mb-3 text-gray-900'>Ballot Tampering</h3>
                            <p className='text-gray-600'>
                                Manipulation of voting machines, ballot papers, or electronic systems to alter results.
                            </p>
                        </div>

                        <div className='bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200'>
                            <div className='text-red-500 mb-4'>
                                <Users className='h-8 w-8' />
                            </div>
                            <h3 className='text-xl font-semibold mb-3 text-gray-900'>Bogus Voting</h3>
                            <p className='text-gray-600'>
                                Impersonation of legitimate voters or casting multiple votes using fake identities.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='py-20 bg-gradient-to-r from-orange-600 to-green-600 text-white'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
                    <div className='mb-8'>
                        <Shield className='h-16
                        w-16 mx-auto mb-4' />
                    </div>
                    <h2 className='text-4xl font-bold mb-6'>
                        Your Voice Matters
                    </h2>
                    <p className='text-xl mb-8 max-w-2xl mx-auto opacity-90'>
                        Have you witnessed election irregularities? Share your experience to help build a stronger,
                        more transparent democracy for everyone.
                    </p>
                    <Link
                    to="/submit-story"
                    className='bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center space-x-2'
                    >
                        <span>Submit Your Experience</span>
                        <ArrowRight className='h-5 w-5'/>
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default Home