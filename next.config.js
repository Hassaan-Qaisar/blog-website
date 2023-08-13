/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {

  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return{
      env: {
        mongodb_username: 'hassaanqaisar2',
        mongodb_password: 'AmsIRWJATZeuAllj',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'blog'
      },
    };
  }

  return{
  env: {
    mongodb_username: 'hassaanqaisar2',
    mongodb_password: 'AmsIRWJATZeuAllj',
    mongodb_clustername: 'cluster0',
    mongodb_database: 'blog_contact'
  }
}
}
