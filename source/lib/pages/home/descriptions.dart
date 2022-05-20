import 'dart:html' as html;

import 'package:flutter/material.dart';

class Description extends StatelessWidget {
  const Description({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        const Align(
          alignment: Alignment.centerLeft,
          child: Text(
            "Hai! Saya Zulhijaya.",
            textAlign: TextAlign.left,
            style: TextStyle(fontSize: 22, fontWeight: FontWeight.bold),
          ),
        ),
        const SizedBox(height: 20),
        const Text(
          "Saya seorang mahasiswa tingkat akhir Program Studi Pendidikan Teknik Informatika dan Komputer di Universitas Negeri Makassar (UNM). Saya mengambil konsentrasi Rekayasa Perangkat Lunak (RPL). Saat ini fokus saya adalah mengembangkan potensi saya sebagai seorang Mobile App Developer. Programming language yang saya gunakan adalah Dart dipadu dengan Flutter. Selain Dart/Flutter, saya juga mahir menggunakan React Native dan Ionic Framework. ",
          textAlign: TextAlign.justify,
          style: TextStyle(fontSize: 14),
        ),
        const SizedBox(height: 20),
        Row(children: [
          ...[
            {'label': 'GitHub', 'url': 'https://github.com/zulhijaya18'},
            {'label': 'WakaTime', 'url': 'https://wakatime.com/@Zulhijaya'},
            {'label': 'Instagram', 'url': 'https://instagram.com/zul_hijaya'},
            {
              'label': 'LinkedIn',
              'url':
                  'https://www.linkedin.com/in/zulhijaya-zulhijaya-07135b229/'
            },
          ]
              .map(
                (e) => Container(
                  margin: const EdgeInsets.only(right: 20),
                  child: InkWell(
                    onTap: () {
                      html.window.open(e['url'].toString(), "_self");
                    },
                    child: Text('${e['label']}'),
                  ),
                ),
              )
              .toList(),
        ]),
      ],
    );
  }
}
