"use client"
import { useEffect } from 'react';

export default function ReplainWidget() {
  useEffect(() => {
    window.replainSettings = { id: '37c1ab9a-6ab9-4183-9c70-55861c852ea8' };
    function f1(u) {
      var s = document.createElement('script');
      s.src = u;
      var x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);
    }
    setTimeout(() => {
      f1('https://widget.replain.cc/dist/client.js');
    }, 20000);
  }, []);

  return null;
}
