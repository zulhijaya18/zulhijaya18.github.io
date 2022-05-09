import 'dart:html' as html;

import 'package:flutter/material.dart';
import 'package:flutter_icons/flutter_icons.dart';
import 'package:google_fonts/google_fonts.dart';

class Description extends StatelessWidget {
  const Description({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Align(
          alignment: Alignment.centerLeft,
          child: Text(
            "Hai! Saya Zulhijaya.",
            textAlign: TextAlign.left,
            style:
                GoogleFonts.poppins(fontSize: 22, fontWeight: FontWeight.bold),
          ),
        ),
        const SizedBox(height: 20),
        // GestureDetector(onTap: () {}),
        Text(
          "I am a first-year graduate student at Carnegie Mellon University pursuing an MS in Artificial Intelligence and Innovation. In the summer of 2021, I graduated top of my class with a high first from The University of Edinburgh with a BSc (Hons) in Artificial Intelligence and Computer Science . My undergraduate thesis on mitigating dataset bias in computer vision was supervised by Prof. Ajitha Rajan received an outstanding paper classification. Currently, I am interested in pursuing an academic career in computational linguistics with a focus in ethics.",
          textAlign: TextAlign.justify,
          style: GoogleFonts.poppins(fontSize: 14),
        ),
        const SizedBox(height: 20),
        Row(
          children: [
            TextButton.icon(
              icon: const Icon(FontAwesome.github),
              onPressed: () {
                html.window.open('https://github.com/zulhijaya18', "_self");
              },
              label: const Text('Github'),
            ),
          ],
        )
      ],
    );
  }
}
