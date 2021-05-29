module.exports = {
    future: {
        webpack5: true,
      },
    images: {
        domains: ["links.papareact.com", "fakestoreapi.com", "www.google.com"]
    },
    env: {
        stripe_public_key: `${process.env.STRIPE_PUBLIC_KEY}`
    }
}