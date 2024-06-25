const BASE_URL = process.env.NEXT_PUBLIC_AWS_URL;
const awsUrl = new URL(`https://${BASE_URL}`);

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: awsUrl.protocol.slice(0, -1),
        hostname: awsUrl.hostname,
        port: "",
        pathname: "**",
      },
    ],
  },
};
