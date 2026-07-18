---
title: "국내 제어시장을 남에게 설명해보니 알게 된 것 — 성장은 데이터센터 스토리다"
description: "25년 차 실무자가 국내 빌딩 자동제어(BAS) 시장의 현재 구조를 설명한다 — BAS 전체 CAGR 7~8% vs 데이터센터 공급 CAGR 20.3%, 제어 실패 비용이라는 축, 2-tier 경쟁 구조, 재무적 투자자로의 의사결정권 이동."
publish: true
published: 2026-07-18
tags:
  - MissionCritical
  - Autonomous
---
2026년 7월, 외부 자문 인터뷰 요청을 받고 질문지에 답을 쓰며 한 주를 보냈다. 25년을 몸담은 시장인데, 막상 남에게 설명하려고 구조를 처음부터 세워보니 오히려 내 머릿속이 정리됐다. 그 정리를 여기 옮긴다. 지금 국내 제어(빌딩 자동제어, BAS) 시장이 어떻게 생겼는지에 대한 이야기다.

## 성장의 실체: 제어시장 성장은 사실상 데이터센터 스토리다

숫자부터 보자.

- 국내 BAS 시장 전체는 연평균 7~8%대의 완만한 성장이다
- 반면 국내 데이터센터 공급은 2010년 이후 연평균 20.3%로 늘었고, 수도권에만 2028년까지 신규 40건 이상·수전용량 약 4.1GW가 예정되어 있다(Savills, 2025)
- 상업용 건물 쪽은 2025년 12월부터 민간 1,000㎡ 이상 ZEB 5등급 의무화라는 규제가 수요의 하방을 받친다

이 세 줄이 시장의 뼈대다. 제어시장의 성장 스토리는 사실상 데이터센터 스토리이고, 상업용은 성장 시장이 아니라 규제가 지탱하는 시장이다. 신축 장비 도입 중심이던 무게중심은 기존 건물의 운영 개선과 디지털 전환으로 이동하고 있다.

## 고객을 업종으로 나누지 마라 — '제어 실패 비용'으로 나눠라

인터뷰 질문지는 고객군을 업종별로 분류해놓고 검증을 요청했다. 답을 쓰다가, 정적인 분류보다 하나의 축으로 재정의하는 쪽이 시장을 훨씬 잘 설명한다는 걸 확인했다. 그 축은 제어가 실패했을 때의 비용이다.

- Performance Critical(데이터센터 등): 제어 실패 = 즉시적·계약적 손실(SLA 페널티). 가격에 비탄력적이고 사양이 주도한다
- Decarbonization(상업용 에너지): 제어 실패 = 누적되는 기회비용(에너지 낭비). 가격에 탄력적이고 ROI가 주도한다
- Public(공공): 제어 실패 = 컴플라이언스·감사 리스크. 조달 규정이 주도한다

이 한 축이면 각 세그먼트의 구매 결정 요인, 가격 탄력성, 의사결정 구조까지 하나의 논리로 이어진다.

## 경쟁 구조: 격차는 '실패 비용이 큰 영역'에만 남았다

국내 시장은 명확한 2-tier 구조다. 글로벌 진영의 무기는 컴플라이언스 관문 통과 능력, 대형 레퍼런스, 자체 이행 조직이고, 국내 진영의 무기는 가격, 조달 적합성, 발주처 밀착 영업이다.

여기서 냉정하게 인정해야 할 게 하나 있다. 범용 HVAC 제어에서 글로벌과 국내 업체의 제품 격차는 사실상 소멸했다. 격차가 실제로 남아 있는 곳은 실패 비용이 큰 영역뿐이다 — 무순단 이중화 아키텍처의 성숙도, OT 사이버보안, 그리고 액체냉각 같은 차세대 부하의 제어 경험. 글로벌 선호가 발생하는 지점과 격차가 남은 지점이 정확히 일치한다.

액체냉각은 특히 주목할 변수다. 랙당 100kW를 넘기는 100% 액체냉각 세대의 냉각 루프 제어는, 공랭 시대의 항온항습과는 차원이 다른 고속 정밀 제어를 요구한다. 이 전환이 제어 고도화의 구조적 수요를 만들고 있다.

## 조용히 진행 중인 가장 큰 변화: 의사결정권의 이동

기술 얘기보다 중요한데 덜 회자되는 변화가 있다. 수도권 데이터센터 투자자 중 재무적 투자자(FI)의 비중이 2024년 23%에서 2028년 63%로 확대될 전망이다. 소유주가 펀드로 바뀌면 구매 결정 기준이 기술 사양에서 자산가치 방어력으로 이동한다 — 앵커 테넌트의 요구 사양 충족, 매각 시 기술 실사 방어, SLA 증빙 같은 것들.

하나 더. Colocation에서는 명목상 발주자가 운영사여도 실질 사양 결정자는 입주 예정 하이퍼스케일러다. 이 시장의 의사결정 지도는 계약서상 발주자가 아니라 사양서 작성자를 따라 그려야 한다.

## 내가 아직 확신 못하는 것

이 그림에서 자신 없는 부분도 적어둔다. 상업용 세그먼트의 실질 지불의사다. 인증을 받으려고 설치한 에너지관리시스템이 설치 후 활용되지 않는 건 업계가 공인하는 문제인데, 이게 운영 최적화 서비스의 기회를 뜻하는지, 아니면 이 세그먼트 지불의사의 한계를 보여주는 증거인지 — 나는 아직 판단을 못 내렸다. 그리고 FI가 주도하는 시장에서 기술 벤더가 자산가치의 언어로 말하는 법, 이것도 업계 전체가 이제 배워가는 중이라고 생각한다.

---

> [!summary] In English — Korea's Building Controls Market: The Growth Story Is a Data Center Story
> Preparing answers for an external advisory interview forced the author, a 25-year industry veteran, to explain Korea's building automation (BAS) market from first principles. The skeleton: overall BAS grows at a modest 7–8% CAGR, while domestic data center supply has grown at 20.3% CAGR since 2010, with 40+ new facilities and ~4.1GW of power capacity planned in the Seoul metro area by 2028 — meaning the market's growth story is effectively a data center story, while commercial demand is propped up by regulation (ZEB Grade 5 mandatory for private buildings over 1,000㎡ from December 2025). Instead of static industry segments, he proposes one axis — the cost of control failure — which explains buying factors, price elasticity, and decision structures across performance-critical, decarbonization, and public segments. The market is distinctly two-tiered, and product gaps between global and domestic vendors have essentially vanished in commodity HVAC control, surviving only where failure costs are high: hitless redundancy, OT cybersecurity, and liquid-cooling control. The quietest but biggest shift is decision power moving to financial investors (23% of metro data center investment in 2024 → 63% projected by 2028), relocating buying criteria from technical specs to asset-value defense. He closes with an open question: whether commercial-segment willingness to pay is real, given that certification-driven BEMS installations often go unused.