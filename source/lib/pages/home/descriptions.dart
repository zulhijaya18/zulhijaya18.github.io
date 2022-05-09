import 'dart:html' as html;
import 'dart:math';

import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:get/get.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:zulhijaya_profile/services/game_catalogue.dart';

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
        // GestureDetector(onTap: () {}),
        const Text(
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          textAlign: TextAlign.justify,
          style: TextStyle(fontSize: 14),
        ),
        const SizedBox(height: 40),
        Row(children: [
          ...[
            {'label': 'GitHub', 'url': 'https://github.com/zulhijaya18'},
            {'label': 'WakaTime', 'url': 'https://wakatime.com/@Zulhijaya'},
            {'label': 'Instagram', 'url': 'https://instagram.com/zul_hijaya'},
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
          InkWell(
            onTap: () {
              int index = Random().nextInt(games.length);
              html.window.open(games[index]['url'], "_self");
              // Get.toNamed('/game');
            },
            child: const Text('Play Game?'),
          ),
        ]),
      ],
    );
  }
}
