   if (isServer) {
      config.externals = config.externals || [];
      config.externals.push('rebrowser-playwright-core');
      config.externals.push('@playwright/browser-chromium');
    }
export default nextConfig;
