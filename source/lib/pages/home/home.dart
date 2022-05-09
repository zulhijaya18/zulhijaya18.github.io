import 'dart:html';

import 'package:flutter/material.dart';
import 'package:zulhijaya_profile/pages/home/circular_picture.dart';
import 'package:zulhijaya_profile/pages/home/descriptions.dart';

class HomePage extends StatelessWidget {
  const HomePage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.start,
          children: [
            const CircularPic(),
            SizedBox(
              width: MediaQuery.of(context).size.width * 0.7,
              child: const Description(),
            ),
          ],
        ),
      ),
    );
  }
}
